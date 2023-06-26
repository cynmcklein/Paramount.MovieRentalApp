namespace MovieRentalAPI.Models
{
    public class RentalDetails
    {
        public int OrderId { get; set; }

        public string? CustomerName { get; set; }

        public string? Phone { get; set; }

        public DateTime? DateRented { get; set; }

        public DateTime? DateReturned { get; set; }
    }
}
