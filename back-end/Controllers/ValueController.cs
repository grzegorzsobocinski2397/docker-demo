using Microsoft.AspNetCore.Mvc;
using System;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ValueController : ControllerBase
    {
        [HttpGet]
        public string Get(string variableName = "MESSAGE")
        {
            return Environment.GetEnvironmentVariable(variableName);
        }
    }
}
