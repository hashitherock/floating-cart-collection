import { ChevronRight, ShoppingBag, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cartTotal, formatPrice, type CartStyle } from '@/lib/cart-collection';
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
  const isDetailed = ['signature-stack', 'checkout-pill', 'halo-bag', 'folded-tote'].includes(style);
  const price = formatPrice(cartTotal(count));
  const items = `${count} ${count === 1 ? 'item' : 'items'}`;

  function renderDetailedCart() {
    switch (style) {
      case 'signature-stack':
        return <>
          <span className="stack-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total stack-total">{price}</span>
        </>;
      case 'checkout-pill':
        return <>
          <span className="pill-bag"><ShoppingBag className="detail-bag-glyph" /></span>
          <span className="pill-details"><span className="detail-items">{items}</span><span className="detail-total">{price}</span></span>
          <ChevronRight className="pill-chevron" />
        </>;
      case 'halo-bag':
        return <>
          <span className="halo-face"><ShoppingBag className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total halo-total">{price}</span>
        </>;
      case 'folded-tote':
        return <>
          <svg className="tote-handle" viewBox="0 0 48 32" fill="none" aria-hidden="true"><path d="M10 29V17a14 14 0 0 1 28 0v12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
          <span className="tote-face"><ShoppingCart className="detail-bag-glyph" /><span className="detail-items">{items}</span></span>
          <span className="detail-total tote-total">{price}</span>
        </>;
      default:
        return null;
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          key={animationKey}
          variant="cart"
          className={cn(`cart-${style}`, animationKey > 0 && 'cart-pulse')}
          aria-label={`${label}, ${items}`}
          onClick={onOpen}
        >
          {isDetailed ? renderDetailedCart() : style === 'three-dimensional' ? (
            <img className="cart-sculpture" src={cartSculpture} alt="" width={1024} height={1024} loading="lazy" />
          ) : <Glyph className="cart-glyph" aria-hidden="true" />}
          {style === 'capsule' && <span className="capsule-label">My cart</span>}
          <span className={cn('cart-badge', animationKey > 0 && 'badge-pulse')} aria-hidden="true">{count}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">View shopping cart · {price}</TooltipContent>
    </Tooltip>
  );
}