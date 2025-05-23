using System;
using System.Data.Common;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetail
{
    public class Query: IRequest<Activity> {
        public required string Id {get; set;}
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
    {
        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {
            var act = await context.Activities.FindAsync([request.Id], cancellationToken);

            if(act == null) {
                throw new Exception("Activity not found");
            }

            return act;
        }
    }
}
