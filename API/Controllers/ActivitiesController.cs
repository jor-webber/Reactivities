using System;
using System.Threading.Tasks;
using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  
  [AllowAnonymous]
  public class ActivitiesController : BaseApiController
  {

    private readonly IMediator _mediator;

    public ActivitiesController(IMediator mediator)
    {
      _mediator = mediator;
    }

    [HttpGet]
    public async Task<IActionResult> GetActivities()
    {
      return HandleResult(await Mediator.Send(new List.Query()));
    }

    [HttpGet("{id}")] // activities/id
    public async Task<IActionResult> GetActivity(Guid id)
    {
      return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
    }

    [HttpPost]
    public async Task<IActionResult> CreateActivity(Activity activity) 
    {
      return HandleResult(await Mediator.Send(new Create.Command{Activity = activity}));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> EditActivity(Guid id, Activity activity) 
    {
      activity.Id = id;
      return Ok(await Mediator.Send(new Edit.Command{Activity = activity}));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteActivity(Guid id) 
    {
      return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
    }
    
  }
}