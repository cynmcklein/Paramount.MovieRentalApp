using System;
using System.Collections.Generic;

namespace MovieRentalAPI.Models;

public partial class CustomerView
{
    public string? Fname { get; set; }

    public string? Lname { get; set; }

    public string? Address { get; set; }

    public int Phone { get; set; }
}
