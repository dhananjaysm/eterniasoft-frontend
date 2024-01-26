import { Subscription } from "@/app/context/SubsContext";
import { create } from "zustand";

interface SubscriptionStoreState {
    selectedSubscription: Subscription | null;
    setSelectedSubscription: (subscription: Subscription | null) => void;
    clearSelectedSubscription: () => void;
  }
  
  const useSubscriptionStore = create<SubscriptionStoreState>((set) => ({
    selectedSubscription: null, // Initial state is no subscription selected
  
    // Method to set the selected subscription
    setSelectedSubscription: (subscription) => set({ selectedSubscription: subscription }),
  
    // Method to clear the selected subscription
    clearSelectedSubscription: () => set({ selectedSubscription: null }),
  }));
  
  export default useSubscriptionStore;