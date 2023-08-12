using Microsoft.AspNetCore.Mvc;

namespace coffee.request.api.Controllers;


[ApiController]
[Route("[controller]")]
public class CoffeeBuyController : ControllerBase
{
      private readonly ILogger<CoffeeBuyController> _logger;
      public CoffeeBuyController(ILogger<CoffeeBuyController> logger)
      {
            _logger = logger;
      }
      [HttpPost]
      [Route("BuyCoffee")]
      public IActionResult BuyCoffee()
      {
            try
            {
             var response = new BuyCoffeeResponse() {
                  uuid = Guid.NewGuid(),
                  Message = "Your coffee bought request has been processed successfully!",
                  Result = true
             };     
                  return Ok(response);
            }
            catch (Exception exp)
            {
                  _logger.LogDebug(exp.ToString());
                  return BadRequest(exp.Message);
            }

      }
}