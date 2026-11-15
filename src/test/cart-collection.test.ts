import { describe, expect, it } from 'vitest';
import { cartDesigns, cartTotal, changeCartQuantity } from '@/lib/cart-collection';

describe('floating cart collection rules', () => {
  it('includes all eight distinct requested concepts', () => {
    expect(cartDesigns.map(design => design.id)).toEqual(['circular', 'gradient', 'glass', 'three-dimensional', 'outline', 'capsule', 'dual', 'commerce']);
  });
  it('updates the badge quantity when a product is added', () => {
    expect(changeCartQuantity(3, 1)).toBe(4);
  });
  it('updates the badge quantity when a product is removed', () => {
    expect(changeCartQuantity(3, -1)).toBe(2);
  });
  it('does not allow a negative cart count', () => {
    expect(changeCartQuantity(0, -1)).toBe(0);
  });
  it('calculates the shared sample cart total', () => {
    expect(cartTotal(4)).toBe(9960);
  });
});