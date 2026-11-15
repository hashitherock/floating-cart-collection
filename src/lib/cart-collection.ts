export type CartStyle = 'circular' | 'gradient' | 'glass' | 'three-dimensional' | 'outline' | 'capsule' | 'dual' | 'commerce';

export interface CartDesign {
  id: CartStyle;
  name: string;
  description: string;
  treatment: string;
}

export const cartDesigns: CartDesign[] = [
  { id: 'circular', name: 'Modern Circular', description: 'A timeless silhouette. Clean lines, with a soft floating shadow.', treatment: 'Classic · Circular' },
  { id: 'gradient', name: 'Gradient Floating', description: 'Two signature colors. One bold, seamlessly blended statement.', treatment: 'Vibrant · Gradient' },
  { id: 'glass', name: 'Glassmorphism', description: 'Frosted glass, delicate borders, and a beautifully light presence.', treatment: 'Elegant · Glass' },
  { id: 'three-dimensional', name: '3D Floating', description: 'Sculpted depth and playful detail. A cart with a little character.', treatment: 'Expressive · 3D' },
  { id: 'outline', name: 'Minimal Outline', description: 'Less, but better. A crisp purple outline with a vivid little accent.', treatment: 'Minimal · Outline' },
  { id: 'capsule', name: 'Premium Capsule', description: 'An elongated silhouette with a little more room for your cart.', treatment: 'Refined · Capsule' },
  { id: 'dual', name: 'Dual-Color', description: 'Signature purple meets red-orange in the smallest of details.', treatment: 'Playful · Two-tone' },
  { id: 'commerce', name: 'Modern E-commerce', description: 'A confident, compact shape. Finished with a signature red edge.', treatment: 'Distinctive · Modern' },
];

export const sampleProduct = { name: 'Everyday Sneaker', price: 2490, category: 'The everyday edit' };
export const initialCartCount = 3;

export function changeCartQuantity(current: number, delta: number) {
  return Math.max(0, current + delta);
}

export function cartTotal(quantity: number) {
  return quantity * sampleProduct.price;
}

export function formatPrice(value: number) {
  return `৳${value.toLocaleString('en-US')}`;
}