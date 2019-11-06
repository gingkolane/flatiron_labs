require 'pry'

def clock_angle(time)
    # code your solution here
    # hour arm starts at hour: hr * 30 degree
    # hour arm travels every min  = 0.5
    # min arm travels every min: degree_per_min = 6

    @hr_min = time.split(':')

    @hr = @hr_min[0].to_f
    @min = @hr_min[1].to_f
  
    @result = ((@hr * 30 + @min * 0.5)- @min*6).abs

    if @result <= 180
      @result
    else 
      360 - @result
   end 

end
