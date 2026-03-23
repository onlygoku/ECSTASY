import { label } from "framer-motion/client";

export const CATEGORIES = [
  { id: 'all', label: 'ALL' },
  { id: 'sports', label: 'SPORTS' },
  {id: 'art', label: 'ART' },
  { id: 'technical', label: 'TECHNICAL' },
  { id:'literary', label: 'LITERARY' },
  { id: 'photography', label: 'PHOTOGRAPHY' },
  { id: 'drama', label: 'DRAMA' },
  { id: 'fashion', label: 'FASHION' },
  { id: 'dance', label: 'DANCE' },
  { id: 'music', label: 'MUSIC' },
  {id: 'comedy', label: 'COMEDY' },
  {id: 'debate', label: 'DEBATE' },
  { id: 'esports', label: 'E-SPORTS' }
];

export const getCategoryColor = (categoryId) => {
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  return category ? category.color : '#dc143c';
};
