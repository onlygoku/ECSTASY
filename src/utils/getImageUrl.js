export const getImageUrl = (url) => {
  if (!url) return null;
  
  // If it's already a direct image URL, return it
  if (url.includes('http') && !url.includes('drive.google.com')) {
    return url;
  }
  
  // Convert Google Drive sharing link to direct image link
  // From: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // To: https://drive.google.com/uc?export=view&id=FILE_ID
  
  if (url.includes('drive.google.com')) {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
    }
    
    // If already in uc format, return as is
    if (url.includes('uc?')) {
      return url;
    }
  }
  
  return url;
};
