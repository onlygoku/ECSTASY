import { EVENTS } from '../data/events';
export const useEvents = () => {
  return { 
    events: EVENTS, 
    loading: false, 
    error: null 
  };
};
