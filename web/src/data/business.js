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
    maps:     'https://www.google.com/maps/place/The+Penguin+Auto+Mobile+Detailing'
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
