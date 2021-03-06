﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace portefolio
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

      public static IWebHost BuildWebHost(string[] args)
      {
        var envName = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

        var configuration = new ConfigurationBuilder()
          .AddJsonFile("hosting.json", optional: false, reloadOnChange: true)
          .AddJsonFile($"hosting.{envName}.json", optional: true, reloadOnChange: true)
          .AddCommandLine(args)
          .Build();

        return WebHost.CreateDefaultBuilder(args)
          .UseWebRoot(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "dist", "portefolio"))
          .UseContentRoot(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "dist", "portefolio"))
          .UseConfiguration(configuration)
          .UseKestrel()
          .UseStartup<Startup>()
          .Build();
      }
    }
}
