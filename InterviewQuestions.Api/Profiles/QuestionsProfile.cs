using AutoMapper;
using InterviewQuestions.Api.Entities;
using InterviewQuestions.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewQuestions.Api.Profiles
{
    public class QuestionsProfile : Profile
    {
        public QuestionsProfile()
        {
            CreateMap<Question, QuestionDto>();
        }
    }
}
