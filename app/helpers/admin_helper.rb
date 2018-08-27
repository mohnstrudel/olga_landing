module AdminHelper
  def nav_link(link_path, &block)
    class_name = current_page?(link_path) ? 'active' : ''

    content_tag(:li, :class => class_name) do
      link_to link_path, &block
    end
  end

  def breadcrumbs
    # Session breadcrumbs is defines in the admin_controller via a before_action filter
    bc = session[:breadcrumbs]
    @content = content_tag("h2", bc.last)
    @content << content_tag(:ol, class: "breadcrumb") do
        bc.collect do |crumb|
          if crumb.equal? bc.last
            content_tag(:li, "<strong>#{crumb}</strong>".html_safe, class: "active")
          else
            content_tag(:li, crumb)
          end
        end.join.html_safe
      end

    # End result should look like this:
    #  %h2 Static Tables
    #  %ol.breadcrumb
    #   %li
    #    %a{:href => "index.html"} Home
    #   %li
    #    %a Tables
    #   %li.active
    #    %strong Static Tables

    return @content
  end
end
