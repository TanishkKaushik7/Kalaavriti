import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

// --- Utility function to combine class names (simplified cn) ---
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

// --- Accordion Context ---
const AccordionContext = React.createContext(null);

// --- Accordion Root Component ---
const Accordion = ({ children, type = "single", defaultValue, value, onValueChange, ...props }) => {
  const [openItems, setOpenItems] = useState(() => {
    if (type === "single" && defaultValue) {
      return [defaultValue];
    }
    if (type === "multiple" && Array.isArray(defaultValue)) {
      return defaultValue;
    }
    return [];
  });

  useEffect(() => {
    if (value !== undefined) {
      if (type === "single" && typeof value === 'string') {
        setOpenItems([value]);
      } else if (type === "multiple" && Array.isArray(value)) {
        setOpenItems(value);
      }
    }
  }, [value, type]);


  const handleToggle = (itemValue) => {
    let newOpenItems;
    if (type === "single") {
      newOpenItems = openItems[0] === itemValue ? [] : [itemValue];
    } else { // type === "multiple"
      newOpenItems = openItems.includes(itemValue)
        ? openItems.filter((item) => item !== itemValue)
        : [...openItems, itemValue];
    }
    setOpenItems(newOpenItems);
    if (onValueChange) {
      if (type === "single") {
        onValueChange(newOpenItems[0] || undefined);
      } else {
        onValueChange(newOpenItems);
      }
    }
  };

  const isItemOpen = (itemValue) => openItems.includes(itemValue);

  return (
    <AccordionContext.Provider value={{ isItemOpen, handleToggle, type }}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  );
};

// --- Accordion Item Component ---
const AccordionItem = React.forwardRef(({ className, value, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion component.");
  }
  const isOpen = context.isItemOpen(value);

  return (
    <div ref={ref} className={cn("border-b", className)} data-state={isOpen ? "open" : "closed"} {...props}>
      {children}
    </div>
  );
});
AccordionItem.displayName = "AccordionItem";

// --- Accordion Trigger Component ---
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionTrigger must be used within an AccordionItem component.");
  }
  const itemValue = ref?.current?.closest("[data-state]")?.getAttribute("value");
  const isOpen = context.isItemOpen(itemValue);

  return (
    <h3 className="flex">
      <button
        ref={ref}
        type="button"
        onClick={() => context.handleToggle(itemValue)}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          isOpen ? "[&>svg]:rotate-180" : "", // Apply rotation based on internal state
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        aria-expanded={isOpen}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </button>
    </h3>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

// --- Accordion Content Component ---
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionContent must be used within an AccordionItem component.");
  }
  const itemValue = ref?.current?.closest("[data-state]")?.getAttribute("value");
  const isOpen = context.isItemOpen(itemValue);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setIsTransitioning(true);
        setHeight(contentRef.current.scrollHeight);
        const timer = setTimeout(() => {
          setIsTransitioning(false);
          setHeight("auto"); // Allow content to adjust if window resizes after animation
        }, 200); // Match CSS transition duration
        return () => clearTimeout(timer);
      } else {
        setIsTransitioning(true);
        setHeight(contentRef.current.scrollHeight); // Set current height before collapse
        requestAnimationFrame(() => { // Ensure height is set before transition starts
            setHeight(0);
        });
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 200); // Match CSS transition duration
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={(node) => {
        contentRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      style={{ height: height === "auto" ? "auto" : `${height}px`, transition: isTransitioning ? "height 200ms ease-out" : "none" }}
      className={cn(
        "overflow-hidden text-sm",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  );
});

AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };