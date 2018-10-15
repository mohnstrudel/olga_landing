class RequestMailer < ApplicationMailer
  default from: 'Оповещения wowyoushine.ru <form@wowyoushine.ru>'

  layout 'mailer'

  def notify_admin(request)
    @request = request
    if @request.type == 'ConsultRequest'
      @subject = 'Пользователь просит проконсультировать его.'
    elsif @request.type == 'BookRequest'
      @subject = 'Пользователь записался на услугу.'
    end

    mail to: Setting.first.email, subject: @subject
  end
end
