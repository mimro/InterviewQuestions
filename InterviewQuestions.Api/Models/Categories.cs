using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewQuestions.Api.Models
{
    public class Categories
    {
        public int CategoryId { get; set; }

        public string DisplayName { get; set; }

        public byte[] DisplayImage { get; set; }

    }
}
