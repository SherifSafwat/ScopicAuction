using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RestAPI.Data;
using RestAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Timers;

namespace RestAPI.Interfaces
{
    public class TimerService : ITimerService
    {
        private readonly DataContext _context;
        IServiceScopeFactory _factory;
        private readonly Timer _timer;

        public TimerService(IServiceScopeFactory factory)
        {
            _factory = factory;
           _context = factory.CreateScope().ServiceProvider.GetRequiredService<DataContext>();

            _timer = new Timer(int.MaxValue);
            _timer.Elapsed += new ElapsedEventHandler(OnElapsedTime);
            _timer.Start();
        }

        private void OnElapsedTime(object source, ElapsedEventArgs e)
        {
            if (_timer.Interval == int.MaxValue)
            {
                _timer.Interval = 1;
                _timer.Start();
                UpdateCloseTime(int.MaxValue);
            }
        }


        public double UpdateTime()
        {
            double cuurent = _timer.Interval;
            UpdateCloseTime(cuurent);
            _timer.Interval = 1;
            _timer.Start();
            return cuurent;
        }

        private void UpdateCloseTime(double time)
        {
            //string str = "update item set CloseDate = newd from item JOIN (select itemid, DATEADD(millisecond, " + time.ToString() + " , CloseDate) newd from item ) xx on xx.ItemId = Item.ItemId";
            string str = "update item set CloseDate = newI from item JOIN (select itemid, (CloseDate - " + time.ToString() + " ) newI from item ) xx on xx.ItemId = Item.ItemId";

            _context.Database.ExecuteSqlRaw(str);
            _context.SaveChanges();
        }
        
    }
}
