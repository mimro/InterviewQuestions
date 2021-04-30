using InterviewQuestions.Api.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewQuestions.Api.Context
{
    public class QuestionsContext : DbContext
    {
        public QuestionsContext(DbContextOptions options) : base(options)
        {
                
        }
        public DbSet<Question> Questions { get; set; }
    }
}
