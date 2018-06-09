using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace authService.Model
{
    public class User
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
    }
}
