using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration.CommandLine;

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

            System.Console.WriteLine(envName);
            
            var configuration = new ConfigurationBuilder()
                .AddJsonFile("hosting.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"hosting.{envName}.json", optional: true, reloadOnChange: true)
                .AddCommandLine(args)
                .Build();

            return WebHost.CreateDefaultBuilder(args)
//                .PreferHostingUrls(false)
                .UseConfiguration(configuration)
                .UseKestrel((options) => { })
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseStartup<Startup>()
//                .UseUrls(urls: "http://localhost:8000")
                .Build();
        }
    }
}
