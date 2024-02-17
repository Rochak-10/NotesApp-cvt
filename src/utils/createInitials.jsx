export default function createInitials(name) {
    return name
      .split(' ')
      .map((word) => word[0].toUpperCase())
      .join('');
  }
  