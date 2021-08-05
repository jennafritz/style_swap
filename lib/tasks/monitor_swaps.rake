desc 'This task will check all swaps every two minutes to see if they have finished, and assign leftover clothings if necessary.'
task :monitor_swaps => :environment do

    def check
        puts 'checking...'
        Swap.all.each do |swap|
            if swap.end < Time.zone.now
                # reassign clothing id's back to users, delete swap_clothings
                swap.swap_clothings.each do |swap_clothing|
                    swap_clothing.clothing.update!(user_id: swap_clothing.prev_owner_id)
                    puts 'Clothing updated'
                    swap_clothing.destroy
                    puts 'Swap_clothing destroyed'
                end
            end
        end
    end

    loop do
        check()
        sleep(2.minutes)
    end

end