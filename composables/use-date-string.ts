export const useDateString = (s: string) => {
  return new Date(s).toLocaleDateString('cz-CZ');
}
