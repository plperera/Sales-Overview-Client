export const formatValue = ({ value, min = 0, max = 0 }) => {
  return value?.toLocaleString('en-US', { 
    minimumFractionDigits: min, 
    maximumFractionDigits: max 
  });
};
