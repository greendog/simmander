get '/' do
  erb :index
end

get '/about' do
  erb :about
end

post '/get_folders.json' do
  content_type :json
  get_content(params[:node]).to_json
end

def get_content(path=".")
  {:folders => get_dirs(path), :files => get_files(path)}
end

def get_dirs(path)
  @path = File.join(File.expand_path(File.dirname(__FILE__)), path)
  @dirs = []
  if File.exists?(@path)
    Dir.entries(@path).each do |dir|
      if File.directory?(File.join(@path, dir)) && dir[0,1]!="."
        el = {:id => File.join(path, dir),:text => dir, :leaf => false}
        # если текущая папка не содержит вложенных папок, то присваиваем пустой массив:
        # el[:folders] = [] if Dir.entries(File.join(@path, dir)).select {|entry| File.directory? File.join(File.join(@path, dir), entry) and !(entry =='.' || entry == '..') }.empty?
        # другой способ:
        # require "pathname"
        # el[:folders] = [] Pathname.new('./').children.select { |c| c.directory? }.collect { |p| p.to_s }.empty?
        @dirs << el
      end
    end
  end
  @dirs
end

def get_files(path)
  @path = File.join(File.expand_path(File.dirname(__FILE__)), path)
  @files = []
  if File.exists?(@path)
    Dir.entries(@path).each do |file|
      if File.file?(File.join(@path, file))
        @files << {
            :filename => file,
            :filesize => file_size(File.join(@path, file)),
            :filedate => File.mtime(File.join(@path, file))
        }
      end
    end
  end
  @files
end

def file_size(path)
  size = File.size(path)

  if (size > 1_000_000) then
    "#{size / 1_000_000} MB"
  elsif (size > 1_000) then
    "#{size / 1_000} KB"
  else
    "#{size} B"
  end
end