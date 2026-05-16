import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class StudentRankServlet extends HttpServlet
{
    public void doPost(HttpServletRequest request,
                       HttpServletResponse response)
                       throws ServletException, IOException
    {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        String name = request.getParameter("sname");
        int marks = Integer.parseInt(request.getParameter("marks"));

        String rank;

        if(marks >= 90)
        {
            rank = "Rank A";
        }
        else if(marks >= 75)
        {
            rank = "Rank B";
        }
        else if(marks >= 60)
        {
            rank = "Rank C";
        }
        else if(marks >= 40)
        {
            rank = "Rank D";
        }
        else
        {
            rank = "Fail";
        }

        out.println("<html>");
        out.println("<head>");

        out.println("<style>");

        out.println("body{font-family:Arial;background:#f2f2f2;}");

        out.println(".box{width:400px;margin:100px auto;background:white;padding:30px;border-radius:10px;box-shadow:0px 0px 10px gray;}");

        out.println("h2{color:darkblue;text-align:center;}");

        out.println("p{font-size:20px;}");

        out.println("</style>");

        out.println("</head>");

        out.println("<body>");

        out.println("<div class='box'>");

        out.println("<h2>Student Result</h2>");

        out.println("<p><b>Student Name :</b> " + name + "</p>");

        out.println("<p><b>Marks :</b> " + marks + "</p>");

        out.println("<p><b>Rank :</b> " + rank + "</p>");
        out.println("<hr>");
        out.println("<p style='text-align:center; color:gray;'>© 24071A05E4 All rights reserved</p>");
        out.println("</div>");

        out.println("</body>");
        out.println("</html>");
    }
}