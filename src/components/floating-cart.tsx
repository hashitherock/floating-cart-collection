import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import type { CartStyle } from '@/lib/cart-collection';
import cartSculpture from '@/assets/cart-sculpture.png';
import { cn } from '@/lib/utils';

interface FloatingCartProps {
  style: CartStyle;
  count: number;
  animationKey: number;
  onOpen: () => void;
  label?: string;
}

export function FloatingCart({ style, count, animationKey, onOpen, label = 'Open shopping cart' }: FloatingCartProps) {
  const Glyph = style === 'commerce' ? ShoppingBag : ShoppingCart;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          key={animationKey}
          variant="cart"
          className={cn(`cart-${style}`, animationKey > 0 && 'cart-pulse')}
          aria-label={`${label}, ${count} items`}
          onClick={onOpen}
        >
          {style === 'three-dimensional' ? (
            <img className="cart-sculpture" src={cartSculpture} alt="" width={1024} height={1024} loading="lazy" />
          ) : <Glyph className="cart-glyph" aria-hidden="true" />}
          {style === 'capsule' && <span className="capsule-label">My cart</span>}
          <span className={cn('cart-badge', animationKey > 0 && 'badge-pulse')} aria-hidden="true">{count}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">View shopping cart</TooltipContent>
    </Tooltip>
  );
}