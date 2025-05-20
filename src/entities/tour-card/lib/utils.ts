export function getTimeDifference(departureTime: string, arrivalTime: string) {
  const departure = new Date(departureTime);
  const arrival = new Date(arrivalTime);

  const diffMs = arrival.getTime() - departure.getTime();
  const diffMinutes = Math.floor(diffMs / 60000);

  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  return { hours, minutes };
}

export function getCurrencyHTML(currency: string) {
  switch (currency) {
    case 'RUB':
      return '₽';
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'KZT':
      return '₸';
    default:
      return currency;
  }
}
