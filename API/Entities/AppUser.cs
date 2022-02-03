using System;
using System.Collections.Generic;
using API.Extensions;

namespace API.Entities
{
    public class AppUser 
    {
        public AppUser() { }
        public AppUser(int id, string userName, DateTime dateOfBirth, string knownAs, DateTime created, DateTime lastActive, string gender, string introduction, string lookingFor, string interests, string city, string country)
        {
            this.Id = id;
            this.UserName = userName;
            this.DateOfBirth = dateOfBirth;
            this.KnownAs = knownAs;
            this.Created = created;
            this.LastActive = lastActive;
            this.Gender = gender;
            this.Introduction = introduction;
            this.LookingFor = lookingFor;
            this.Interests = interests;
            this.City = city;
            this.Country = country;
        }
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;
        public string Gender { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public virtual ICollection<Photo> Photos { get; set; }

        // public int GetAge()
        // {
        //     return DateOfBirth.CalculateAge();
        // }
    }
}