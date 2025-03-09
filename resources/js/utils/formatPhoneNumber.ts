function formatPhoneNumber(phone: string): string {
  // Xóa bỏ các ký tự không phải số
  const cleaned = phone.replace(/\D/g, '');

  // Kiểm tra nếu là số Việt Nam (bắt đầu bằng 84 hoặc 0)
  if (cleaned.startsWith('84')) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
  } else if (cleaned.startsWith('0')) {
    return `+84 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  } else {
    return phone; // Trả về nguyên bản nếu không nhận diện được
  }
}

export default formatPhoneNumber;

// console.log(formatPhoneNumber('0912345678')); // +84 912 345 678
// console.log(formatPhoneNumber('+84912345678')); // +84 912 345 678
// console.log(formatPhoneNumber('0123456789')); // +84 123 456 789
