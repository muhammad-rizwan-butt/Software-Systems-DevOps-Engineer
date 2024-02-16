const truncateText = (text = "", maxLength) => {
  if (text)
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
  return text;
};

export default truncateText;
