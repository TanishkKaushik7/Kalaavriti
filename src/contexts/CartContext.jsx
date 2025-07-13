import React, { createContext, useContext, useReducer, useEffect } from 'react';

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const CART_STORAGE_KEY = 'kalaavritti_cart';

const cartReducer = (state, action) => {
  let nextState;
  switch (action.type) {
    case 'ADD_ITEM': {
      console.log('[CartReducer] ADD_ITEM called with payload:', action.payload);
      console.log('[CartReducer] Current state:', state);
      
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        console.log('[CartReducer] Item exists, updating quantity');
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        nextState = {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
          itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        };
      } else {
        console.log('[CartReducer] New item, adding to cart');
        const newItems = [...state.items, { ...action.payload, quantity: 1 }];
        nextState = {
          ...state,
          items: newItems,
          total: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
          itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        };
      }
      console.log('[CartReducer] New state after ADD_ITEM:', nextState);
      break;
    }
    case 'REMOVE_ITEM': {
      console.log('[CartReducer] REMOVE_ITEM called with id:', action.payload);
      const newItems = state.items.filter(item => item.id !== action.payload);
      nextState = {
        ...state,
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
      };
      break;
    }
    case 'UPDATE_QUANTITY': {
      console.log('[CartReducer] UPDATE_QUANTITY called:', action.payload);
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      nextState = {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      };
      break;
    }
    case 'CLEAR_CART':
      console.log('[CartReducer] CLEAR_CART called');
      nextState = initialState;
      break;
    default:
      nextState = state;
  }
  // Debug log
  if (action.type !== '@@INIT') {
    console.log('[CartReducer]', action.type, action.payload, '=>', nextState);
  }
  return nextState;
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load initial state from localStorage
  const getInitialState = () => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      console.log('[CartProvider] Loading from localStorage:', stored);
      if (stored) {
        const parsed = JSON.parse(stored);
        console.log('[CartProvider] Parsed state:', parsed);
        return parsed;
      }
    } catch (e) {
      console.error('[CartProvider] Error loading from localStorage:', e);
    }
    console.log('[CartProvider] Using initial state');
    return initialState;
  };
  
  const [state, dispatch] = useReducer(cartReducer, undefined, getInitialState);

  // Persist state to localStorage
  useEffect(() => {
    console.log('[CartProvider] Saving to localStorage:', state);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const addItem = (item) => {
    console.log('[CartProvider] addItem called with:', item);
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    console.log('[CartProvider] removeItem called with id:', id);
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    console.log('[CartProvider] updateQuantity called:', { id, quantity });
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    console.log('[CartProvider] clearCart called');
    dispatch({ type: 'CLEAR_CART' });
  };

  console.log('[CartProvider] Current state:', state);

  return (
    <CartContext.Provider value={{
      ...state,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  console.log('[useCart] Context value:', context);
  return context;
};