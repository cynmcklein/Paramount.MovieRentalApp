using System;
using System.Collections.Generic;

namespace MovieRentalAPI.Models;

public partial class Movie
{
    public int MovieId { get; set; }

    public string? Name { get; set; }

    public string? Genre { get; set; }

    public string? DaysAvailable { get; set; }

    public decimal? Price { get; set; }

    public virtual ICollection<OrderDetail> OrderDetails { get; } = new List<OrderDetail>();
}
