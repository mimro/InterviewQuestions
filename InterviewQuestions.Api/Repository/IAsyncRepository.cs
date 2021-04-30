using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewQuestions.Api.Repository
{
    public interface IAsyncRepository<T>
    {
        Task AddAsync(T entity);

        Task UpdateAsync(T entity);

        Task DeleteAsync(int id);

        Task<bool> SaveChangesAsync();

        Task<IEnumerable<T>> GetAllAsync();

        Task<T> GetyByIdAsync(int id);
    }
}
