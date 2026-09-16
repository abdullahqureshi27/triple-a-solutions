export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+92 329 0079500";

// Stripped numeric characters for tel: and wa.me protocols
export const PHONE_CLEAN = PHONE_NUMBER.replace(/[^0-9]/g, "");

// Dynamic WhatsApp link with inquiry message
export const WHATSAPP_URL = `https://wa.me/${PHONE_CLEAN}?text=Hi%2C%20I%20want%20to%20inquire%20about%20your%20services`;

// Click-to-call link
export const TEL_URL = `tel:+${PHONE_CLEAN}`;
