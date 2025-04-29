export const validateMessage = (value) => {
  const lines = value.split("\n");

  if (lines.length > 2) {
    return "Message cannot have more than 2 lines.";
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const hasSpaces = /\s/.test(line);
    const maxChars = hasSpaces ? 32 : 30;

    if (line.length > maxChars) {
      return `Line ${i + 1} cannot exceed ${maxChars} characters (${hasSpaces ? "with spaces" : "without spaces"}).`;
    }
  }

  return "";
};
