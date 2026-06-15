export const business = {
  name: 'The Penguin Auto Mobile Detailing',
  shortName: 'The Penguin',
  tagline: 'Auto Mobile Detailing',
  owner: 'Erik Cortes Lopez',
  yearsExperience: 5,
  serviceArea: 'Georgia, USA',
  phone: {
    raw: '+14704494344',
    display: '(470) 449-4344'
  },
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61574151563673',
    tiktok:   'https://www.tiktok.com/@thepenguinautodetailing',
    maps:     'https://www.google.com/maps/place/The+Penguin+Auto+Mobile+Detailing/@34.0476639,-83.967322,9z/data=!3m1!4b1!4m6!3m5!1s0xa913f5a356d5291f:0x32c5b3c1ee5dcc7f!8m2!3d34.0476639!4d-83.967322!16s%2Fg%2F11x1p5z0d5'
  }
};

export const telHref = `tel:${business.phone.raw}`;

export function smsHref(body) {
  const sep = /iPad|iPhone|iPod/.test(navigator.userAgent) ? '&' : '?';
  return `sms:${business.phone.raw}${sep}body=${encodeURIComponent(body)}`;
}

const WA_NUMBER = business.phone.raw.replace(/\D/g, '');
export function waHref(body) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(body)}`;
}
