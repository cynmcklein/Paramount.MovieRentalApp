using System;
using System.Collections.Generic;

namespace MovieRentalAPI.Models;

public partial class Order
{
    public int OrderId { get; set; }

    public DateTime? DateRented { get; set; }

    public DateTime? DateReturned { get; set; }

    public int? CustomerId { get; set; }

    public int? MovieId { get; set; }

    public virtual Customer? Customer { get; set; }

    public virtual ICollection<OrderDetail> OrderDetails { get; } = new List<OrderDetail>();
}
