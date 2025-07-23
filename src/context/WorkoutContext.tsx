import React, { createContext, useState, ReactNode, useContext } from 'react';
//we defined types for our workout plans 
type WorkoutPlan = {
  id: string;
  title: string;
  duration: string;
};
//using that type we define the context type
type WorkoutContextType = {
  plans: WorkoutPlan[];
  addPlan: (plan: WorkoutPlan) => void;
};
//we created a context for our workout plans
const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

//we created a provider component that will wrap our app and provide the context to all components
export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  //we defined the initial state for our workout plans
    const [plans, setPlans] = useState<WorkoutPlan[]>([
    { id: '1', title: 'Beginner Fat Loss', duration: '4 Weeks' },
    { id: '2', title: 'Muscle Gain Plan', duration: '6 Weeks' },
  ]);
//we defined a function to add a new plan to the state
  const addPlan = (plan: WorkoutPlan) => setPlans([...plans, plan]);

  return (
    // we provide the context to all components that are wrapped by this provider
    <WorkoutContext.Provider value={{ plans, addPlan }}>
      {children}
    </WorkoutContext.Provider>
  );
};
// we created a custom hook to use the context in our components
export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) throw new Error('useWorkout must be used within a WorkoutProvider');
  return context;
};
