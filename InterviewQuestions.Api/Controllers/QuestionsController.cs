using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using InterviewQuestions.Api.Entities;
using InterviewQuestions.Api.Models;
using InterviewQuestions.Api.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InterviewQuestions.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly IAsyncRepository<Question> questionsRepository;
        private readonly IMapper mapper;

        public QuestionsController(IAsyncRepository<Question> questionsRepository, IMapper mapper)
        {
            this.questionsRepository = questionsRepository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<QuestionDto>>> Get()
        {
            ////using (var streamReader = new StreamReader("./Data/QuestionsData.json"))
            ////{
            ////    string json = await streamReader.ReadToEndAsync();
            ////    return Ok(json);
            ////}
            try
            {
                var questions = await this.questionsRepository.GetAllAsync();
                var dto = mapper.Map<List<QuestionDto>>(questions);
                return Ok(dto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPost]
        public async Task<ActionResult<string>> Post([FromBody] Question question)
        {
            try
            {
                await this.questionsRepository.AddAsync(question);
                await this.questionsRepository.SaveChangesAsync();

                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }

        [HttpPut]
        public async Task<ActionResult<Question>> Put([FromBody] Question question)
        {
            try
            {
                await this.questionsRepository.UpdateAsync(question);
                await this.questionsRepository.SaveChangesAsync();

                return Ok(question);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<QuestionDto>> Delete(int id)
        {
            try
            {
                await this.questionsRepository.DeleteAsync(id);
                await this.questionsRepository.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
