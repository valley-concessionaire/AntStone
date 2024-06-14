export default function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(date.getUTCFullYear()).slice(-2); // Get last two digits of year

    return `${day}-${month}-${year}`;
}