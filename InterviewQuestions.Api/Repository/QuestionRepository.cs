using InterviewQuestions.Api.Context;
using InterviewQuestions.Api.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewQuestions.Api.Repository
{
    public class QuestionRepository : IAsyncRepository<Question>
    {
        public readonly QuestionsContext qestionsContext;

        public QuestionRepository(QuestionsContext qestionsContext)
        {
            this.qestionsContext = qestionsContext;
        }

        public async Task AddAsync(Question entity)
        {
            await this.qestionsContext.AddAsync(entity);
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Question>> GetAllAsync()
        {
            IEnumerable<Question> questions = this.qestionsContext.Questions;

            return questions;
        }

        public Task<Question> GetyByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await this.qestionsContext.SaveChangesAsync()) > 0;
        }

        public Task UpdateAsync(Question entity)
        {
            throw new NotImplementedException();
        }
    }
}
