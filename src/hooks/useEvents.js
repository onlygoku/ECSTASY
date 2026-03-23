import { EVENTS } from '../data/events';

// Static events hook - no API calls needed
export const useEvents = () => {
  // Simply return the static events data
  // No loading states or error handling needed since data is hardcoded
  return { 
    events: EVENTS, 
    loading: false, 
    error: null 
  };
};
