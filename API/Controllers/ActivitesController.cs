using System;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using Domain;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Application.Activities.Queries;
using Application.Activities.Commands;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities() {
        return await Mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivities(string id) {
        return await Mediator.Send(new GetActivityDetail.Query() {Id = id});
    }

    [HttpPost]
    public async Task<string> createActivity(Activity Activity) {
        return await Mediator.Send(new CreateActivity.Command{Activity = Activity});
    }

    [HttpPut]
    public async Task<ActionResult> editActivity(Activity activity) {

        await Mediator.Send(new EditActivity.Command{Activity = activity});
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> deleteActivity(string id) {
        await Mediator.Send(new DeleteActivity.Command{Id = id});
        return Ok();
    }
}
