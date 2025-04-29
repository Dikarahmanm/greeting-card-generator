import { describe, it, expect } from 'vitest';
import { validateMessage } from '../src/components/helpers.js';



describe("validateMessage", () => {
  it("should allow valid 1-line message without spaces (max 30 chars)", () => {
    const message = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234"; // 30 chars
    expect(validateMessage(message)).toBe("");
  });

  it("should allow valid 1-line message with spaces (max 32 chars)", () => {
    const message = "Hello this is spaced message ok"; // 31 chars with spaces
    expect(validateMessage(message)).toBe("");
  });

  it("should allow valid 2-line message each line under limit", () => {
    const message = "Hello spaced msg\nSecond line here";
    expect(validateMessage(message)).toBe("");
  });

  it("should return error if more than 2 lines", () => {
    const message = "Line 1\nLine 2\nLine 3";
    expect(validateMessage(message)).toBe("Message cannot have more than 2 lines.");
  });

  it("should return error if a line exceeds 30 chars without spaces", () => {
    const message = "ABCDEFGHIJKLMNOABCDEFGHIJKLMNO1"; // 31
    expect(validateMessage(message)).toContain("Line 1 cannot exceed 30 characters");
  });

  it("should return error if a line exceeds 32 chars with spaces", () => {
    const message = "Hello this is way too long spaced line here"; // 41
    expect(validateMessage(message)).toContain("Line 1 cannot exceed 32 characters");
  });
});
