import { PaymentMethod } from '@/types';

interface GetPayMethodStyles {
  color: string;
  bg: string;
}

export function getPayMethodStyles(
  payMethod: PaymentMethod | string,
): GetPayMethodStyles {
  switch (payMethod) {
    case 'cash':
      return { bg: 'low_scale.cyan', color: 'cyan.400' };

    case 'billet':
      return { bg: 'low_scale.purple', color: 'purple.400' };

    case 'credit_card':
      return { bg: 'low_scale.orange', color: 'orange.400' };

    case 'pix':
      return { bg: 'low_scale.yellow', color: 'yellow.400' };

    default:
      return { bg: '¯|_(ツ)_/¯', color: '"¯|_(ツ)_/¯"' };
  }
}
