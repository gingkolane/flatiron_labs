require 'pry'

class String

  def sentence?
    if self.end_with?('.')
      true
    else
      false
    end

  end

  def question?
    if self.end_with?('?')
      true
    else
      false
    end
  end

  def exclamation?
    if self.end_with?('!')
      true
    else
      false
    end
  end

  def count_sentences
    sentences = self.split(' ')
# split can be used this way: split(/[?!.]/) /[]/ can be used to enclose multiple characters
    count = 0
    sentences.each do |sentence|
      if sentence.sentence? || sentence.question? || sentence.exclamation?
      count += 1
      end
    end
    count
    # binding.pry put binding.pry inside the instance method to check instance method
  end

end
