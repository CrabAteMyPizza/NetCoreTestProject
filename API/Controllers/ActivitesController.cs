using System;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using Domain;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class ActivitiesController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities() {
        return await context.Activities.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivities(string id) {
        var act = await context.Activities.FindAsync(id);
        if(act == null) return NotFound();

        return act;
    }
}
